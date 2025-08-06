var r = n(77025),
    i = n(880181),
    o = n(527160),
    a = n(661314),
    s = n(87185),
    l = a('IE_PROTO'),
    c = Object,
    u = c.prototype;
e.exports = s
    ? c.getPrototypeOf
    : function (e) {
          var t = o(e);
          if (r(t, l)) return t[l];
          var n = t.constructor;
          return i(n) && t instanceof n ? n.prototype : t instanceof c ? u : null;
      };
