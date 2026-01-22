var r = n(630017),
    i = Function.prototype,
    a = i.apply,
    s = i.call;
e.exports =
    ("object" == typeof Reflect && Reflect.apply) ||
    (r
        ? s.bind(a)
        : function () {
              return s.apply(a, arguments);
          });
