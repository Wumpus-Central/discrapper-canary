n.d(t, {
    A: () => o,
});
var r = n(543894),
    i = n(324049),
    a = n(619881),
    s = n(444746);

function o(e) {
    return ["html", "body", "#document"].indexOf((0, a.A)(e)) >= 0
        ? e.ownerDocument.body
        : (0, s.sb)(e) && (0, i.A)(e)
          ? e
          : o((0, r.A)(e));
}
