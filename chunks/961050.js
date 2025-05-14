var e = r(77025),
    o = r(880181),
    i = r(527160),
    u = r(661314),
    c = r(87185),
    a = u('IE_PROTO'),
    f = Object,
    s = f.prototype;
t.exports = c
    ? f.getPrototypeOf
    : function (t) {
          var n = i(t);
          if (e(n, a)) return n[a];
          var r = n.constructor;
          return o(r) && n instanceof r ? r.prototype : n instanceof f ? s : null;
      };
