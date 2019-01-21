import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable({
    providedIn: 'root'
})
export class UpdateService {

    constructor(
        private swUpdate: SwUpdate
    ) {
        swUpdate.available.subscribe(e => {
            const res = confirm('アプリケーションが更新されました。リロードしますか？');
            if (res) {
                window.location.reload();
            }
        });
    }

}
