A.d(t, {
    B: function () {
        return l;
    }
});
var n = A(200651);
A(192379);
var r = A(481060),
    a = A(120651),
    i = A(388032);
function l(e, t, A) {
    let l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
    (0, a.Z)({
        title: e,
        body:
            'string' == typeof t
                ? t
                : i.intl.format(t, {
                      highlightHook: (e) =>
                          (0, n.jsx)(r.Text, {
                              variant: 'text-md/normal',
                              color: 'text-normal',
                              style: { display: 'inline' },
                              children: e
                          }),
                      ...l
                  }),
        cta: i.intl.string(i.t['NX+WJC']),
        onConfirm: () => {},
        iconVariant: A
    });
}
