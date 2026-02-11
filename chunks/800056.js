i.d(t, { r: () => T });
var n = i(574381),
    l = i(311907),
    s = i(314116),
    r = i(827343),
    a = i(77729),
    u = i(419954),
    o = i(430452),
    d = i(780964),
    _ = i(985018);
let T = (0, u.zD)(d.X.STREAMING_OS_MENU_SCREEN_CAPTURE, {
    useTitle: () => _.intl.string(_.t.lt8rRx),
    useSubtitle: () => _.intl.string(_.t.ie1mgY),
    useValue: function () {
        return (0, l.bG)([o.Ay], () => o.Ay.getUseSystemScreensharePicker());
    },
    setValue: function (e) {
        (0, n.cX)() && e
            ? (0, s.A)({
                  title: _.intl.string(_.t["9jf31O"]),
                  subtitle: _.intl.string(_.t.uBd6JW),
                  variant: "primary",
                  onConfirm: () => {
                      r.A.setUseSystemScreensharePicker(e), a.A.app.relaunch();
                  },
                  confirmText: _.intl.string(_.t.BddRzS),
              })
            : r.A.setUseSystemScreensharePicker(e);
    },
    usePredicate: function () {
        return (0, l.bG)([o.Ay], () => o.Ay.supportsSystemScreensharePicker() && (0, n.cX)());
    },
});
