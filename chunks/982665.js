var i = n(735471),
    r = n(941332),
    a = r.all;
e.exports = r.IS_HTMLDDA
    ? function (e) {
          return 'object' == typeof e ? null !== e : i(e) || e === a;
      }
    : function (e) {
          return 'object' == typeof e ? null !== e : i(e);
      };
