import { observable, action, computed, autorun, toJS } from 'mobx';
import { getUuid } from '../utils/utils';

export default class ListStore {
    @observable list = [];

    init() {
      autorun(() => {
        console.log('from autorun:', toJS(this.list));
      });
    }

    @computed get total() {
      return this.list.length;
    }

    getList() {
      this.list = Array.from([1, 2, 3], () => {
        return getUuid();
      });
    }

    @action addNew() {
      this.list.push(getUuid());
    }
}

