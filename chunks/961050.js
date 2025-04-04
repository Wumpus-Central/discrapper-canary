var r = a(77025),
    n = a(880181),
    _ = a(527160),
    o = a(661314),
    i = a(87185),
    c = o('IE_PROTO'),
    s = Object,
    E = s.prototype;
t.exports = i
    ? s.getPrototypeOf
    : function (t) {
          var e = _(t);
          if (r(e, c)) return e[c];
          var a = e.constructor;
          return n(a) && e instanceof a ? a.prototype : e instanceof s ? E : null;
      };
