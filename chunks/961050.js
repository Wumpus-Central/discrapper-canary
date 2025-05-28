var r = n(77025),
    i = n(880181),
    a = n(527160),
    o = n(661314),
    s = n(87185),
    l = o('IE_PROTO'),
    c = Object,
    u = c.prototype;
e.exports = s
    ? c.getPrototypeOf
    : function (e) {
          var t = a(e);
          if (r(t, l)) return t[l];
          var n = t.constructor;
          return i(n) && t instanceof n ? n.prototype : t instanceof c ? u : null;
      };
