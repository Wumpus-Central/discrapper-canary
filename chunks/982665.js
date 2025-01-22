var i = r(735471),
    a = r(941332),
    o = a.all;
e.exports = a.IS_HTMLDDA
    ? function (e) {
          return 'object' == typeof e ? null !== e : i(e) || e === o;
      }
    : function (e) {
          return 'object' == typeof e ? null !== e : i(e);
      };
