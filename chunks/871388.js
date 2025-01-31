t.d(e, { B: () => i });
var n = t(200651);
t(192379);
var a = t(481060),
    l = t(120651),
    r = t(388032);
function i(A, e, t) {
    let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    (0, l.Z)({
        title: A,
        body:
            'string' == typeof e
                ? e
                : r.intl.format(e, {
                      highlightHook: (A) =>
                          (0, n.jsx)(a.Text, {
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              style: { display: 'inline' },
                              children: A
                          }),
                      ...i
                  }),
        cta: r.intl.string(r.t['NX+WJC']),
        onConfirm: () => {},
        iconVariant: t
    });
}
