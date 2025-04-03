n.d(t, { j: () => a });
var r = n(406432),
    i = n(981631);
function a(e, t) {
    let { targetKind: n, embedIndex: a } = t;
    if ('media' === n) {
        var l, o;
        let t = e;
        return (
            (null == (l = e.messageReference) ? void 0 : l.type) === i.Uvt.FORWARD && (t = null == (o = e.messageSnapshots[0]) ? void 0 : o.message),
            {
                onlyAttachmentIds:
                    null == t
                        ? void 0
                        : t.attachments
                              .filter((e) => {
                                  let { filename: t } = e;
                                  return (0, r.CO)(t) || (0, r.NU)(t);
                              })
                              .map((e) => e.id)
            }
        );
    }
    return 'embed' === n && null != a ? { onlyEmbedIndices: [a] } : 'shortcut' === n ? {} : void 0;
}
