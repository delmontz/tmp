import {observable, computed, action} from 'mobx';

export default class DataStore {
    @observable str = 'hoge';

    @action eventHandle = (resStr) => {
       console.log('action');
       this.str = resStr;
    }
}