/**
 * @name Auth
 * @author Edinson Nuñez More
 * @type {Class}
 * @description Class for authentication
 */
//import Model from './Model';
import api from '../lib/Api.js';
import AuthToken from '../lib/AuthToken.js';
const serviceName = 'login';
export default class Auth{
  // login[POST]
  static login( model, next ){
    var service = api.all('login');
    service.post(model).then(
    (result)=>{
      return next(null,result);
    },(error)=>{
      return next(error.response.data.data);
    })
    .catch((err) => {
      console.log('error',err);
      return next(err);
    });
  }

  // me[GET]
  static me(next){
    var service = api.all('me');
    service.getAll().then(
    (result)=>{
      return next(null,result.body().data());
    },(error)=>{
        return next(error.response.data.data);
    })
    .catch((err) => {
      console.log('error',err);
      throw err;
      return next(err);
    });
  }

  static someone(userId, next){
    var service = api.one('admin/users', userId);
    service.get().then(
    (result)=>{
      return next(null,result.body().data());
    },(error)=>{
      return next(error.response.data.data);
    })
    .catch((err) => {
      console.log('error',err);
      throw err;
      return next(err);
    });
  }

  static loggedIn(){
    return !!AuthToken.getToken();
  }

  static logout( noRedirect ){
//TODO: Does this clear the data from memory?
    AuthToken.setToken(null);
    if( !noRedirect ){
      document.location.hash="#/login";
    }
  }

  static requestResetPasswordKey(model,next) {
    var service = api.all('password/requestResetPasswordKey');
    service.post(model).then(
    (result)=>{
      return next(null,result);
    },(error)=>{
      return next(error.response.data.data);
    })
    .catch((err) => {
      console.log('error',err);
      return next(err);
    });
  }

  static resetPassword(model,next) {
    var service = api.one('password/resetPassword', '');
    AuthToken.setToken('Bearer '+ model.token);
    service.put({password: model.password}).then(
    (result)=>{
      console.log('entro');
      AuthToken.setToken(null);
      return next(null,result);
    },(error)=>{
      console.log('error', result);
      return next(error.response.data.data);
    })
    .catch((err) => {
      console.log('error',err);
      return next(err);
    });
  }

}
