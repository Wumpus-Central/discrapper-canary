n.d(t, { i: () => i });
var r = n(661822);
function i(e, t, n = () => {}) {
    var a, o, _;
    let s;
    try {
        s = e();
    } catch (e) {
        throw (t(e), n(), e);
    }
    return (
        (a = s),
        (o = t),
        (_ = n),
        (0, r.J8)(a)
            ? a.then(
                  (e) => (_(), e),
                  (e) => {
                      throw (o(e), _(), e);
                  },
              )
            : (_(), a)
    );
}
