a.d(e, { i: () => _ });
var r = a(573736),
    n = a(886115);
function o(t) {
    return {
        ...t,
        path: 'path' in t && Array.isArray(t.path) ? t.path.join('.') : void 0,
        keys: 'keys' in t ? JSON.stringify(t.keys) : void 0,
        unionErrors: 'unionErrors' in t ? JSON.stringify(t.unionErrors) : void 0
    };
}
let _ = (0, a(151122)._I)((t = {}) => {
    let e = t.limit || 10;
    return {
        name: 'ZodErrors',
        processEvent(t, a) {
            var _;
            return t.exception && t.exception.values && a && a.originalException && ((_ = a.originalException), (0, r.VZ)(_) && 'ZodError' === _.name && Array.isArray(_.errors)) && 0 !== a.originalException.issues.length
                ? {
                      ...t,
                      exception: {
                          ...t.exception,
                          values: [
                              {
                                  ...t.exception.values[0],
                                  value: (function (t) {
                                      let e = new Set();
                                      for (let a of t.issues) a.path && a.path[0] && e.add(a.path[0]);
                                      let a = Array.from(e);
                                      return `Failed to validate keys: ${(0, n.$G)(a.join(', '), 100)}`;
                                  })(a.originalException)
                              },
                              ...t.exception.values.slice(1)
                          ]
                      },
                      extra: {
                          ...t.extra,
                          'zoderror.issues': a.originalException.errors.slice(0, e).map(o)
                      }
                  }
                : t;
        }
    };
});
