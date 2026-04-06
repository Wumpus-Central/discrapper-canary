n.d(e, { A: () => r });
function r(t, e) {
    return (r = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (t, e) {
              return (t.__proto__ = e), t;
          })(t, e);
}
