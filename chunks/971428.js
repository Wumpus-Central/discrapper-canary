var r = 'object' == typeof document && document.all;
t.exports =
    void 0 === r && void 0 !== r
        ? function (t) {
              return 'function' == typeof t || t === r;
          }
        : function (t) {
              return 'function' == typeof t;
          };
