/**
 * global_submitid.js
 *
 * Globális NIVOR beküldési azonosító-kezelő (Submit ID Generator).
 * - Generál egy egyedi submit_id-t a beküldés pillanatában.
 * - Formátum: ÉÉÉÉHHNNóóppss + 3-4 véletlen alfanumerikus karakter
 *   Pl.: 20260606084231x7kR
 * - Elérhető globálisan a generateNvrSubmitId() függvényen keresztül.
 */

(function () {

    window.generateNvrSubmitId = function () {
        const now = new Date();
        const yyyy = now.getFullYear();
        const MM   = String(now.getMonth() + 1).padStart(2, '0');
        const dd   = String(now.getDate()).padStart(2, '0');
        const hh   = String(now.getHours()).padStart(2, '0');
        const mm   = String(now.getMinutes()).padStart(2, '0');
        const ss   = String(now.getSeconds()).padStart(2, '0');

        const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
        const randLen = 3 + Math.floor(Math.random() * 2);
        let rand = '';
        for (let i = 0; i < randLen; i++) {
            rand += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        return `${yyyy}${MM}${dd}${hh}${mm}${ss}${rand}`;
    };

})();
