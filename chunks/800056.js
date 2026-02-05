i.d(e, { r: () => A });
var n = i(574381),
    l = i(311907),
    s = i(314116),
    r = i(827343),
    a = i(77729),
    u = i(419954),
    o = i(430452),
    d = i(780964),
    T = i(985018);
let A = (0, u.zD)(d.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
    useTitle: () => T.intl.string(T.t.lt8rRx),
    useSubtitle: () => T.intl.string(T.t.ie1mgY),
    useValue: function () {
        return (0, l.bG)([o.A], () => o.A.getUseSystemScreensharePicker());
    },
    setValue: function (t) {
        (0, n.cX)() && t
            ? (0, s.A)({
                  title: T.intl.string(T.t["9jf31O"]),
                  subtitle: T.intl.string(T.t.uBd6JW),
                  variant: "primary",
                  onConfirm: () => {
                      r.A.setUseSystemScreensharePicker(t), a.A.app.relaunch();
                  },
                  confirmText: T.intl.string(T.t.BddRzS),
              })
            : r.A.setUseSystemScreensharePicker(t);
    },
    usePredicate: function () {
        return (0, l.bG)([o.A], () => o.A.supportsSystemScreensharePicker() && (0, n.cX)());
    },
});
