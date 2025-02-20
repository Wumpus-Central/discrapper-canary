var r = n(735471),
    i = n(941332),
    o = i.all;
e.exports = i.IS_HTMLDDA
    ? function (e) {
          return 'object' == typeof e ? null !== e : r(e) || e === o;
      }
    : function (e) {
          return 'object' == typeof e ? null !== e : r(e);
      };
