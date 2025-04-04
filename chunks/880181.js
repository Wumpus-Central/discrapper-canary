var e = 'object' == typeof document && document.all;
t.exports =
    void 0 === e && void 0 !== e
        ? function (t) {
              return 'function' == typeof t || t === e;
          }
        : function (t) {
              return 'function' == typeof t;
          };
