import {  PipeTransform, Pipe } from '@angular/core';
import { IUser } from './user';

@Pipe({
    name: 'userFilter'
})
export class UserFilterPipe implements PipeTransform {

    transform(value: IUser[], filterBy: string): IUser[] {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        return filterBy ? value.filter((user: IUser) =>
            user.login.toLocaleLowerCase().indexOf(filterBy) !== -1) : value;
    }
}
