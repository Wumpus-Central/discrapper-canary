"use strict";
e.exports = function (e) {
    return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
    });
};
