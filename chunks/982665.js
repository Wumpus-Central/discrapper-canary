var e = n(735471),
    o = n(941332),
    i = o.all;
t.exports = o.IS_HTMLDDA
    ? function (t) {
          return 'object' == typeof t ? null !== t : e(t) || t === i;
      }
    : function (t) {
          return 'object' == typeof t ? null !== t : e(t);
      };
