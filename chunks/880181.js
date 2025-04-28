var n = 'object' == typeof document && document.all;
t.exports =
    void 0 === n && void 0 !== n
        ? function (t) {
              return 'function' == typeof t || t === n;
          }
        : function (t) {
              return 'function' == typeof t;
          };
