n.d(t, { j: () => a });
var i = n(406432),
    l = n(981631);
function a(e, t) {
    let { targetKind: n, embedIndex: a } = t;
    if ('media' === n) {
        var r, s;
        let t = e;
        return (
            (null === (r = e.messageReference) || void 0 === r ? void 0 : r.type) === l.Uvt.FORWARD && (t = null === (s = e.messageSnapshots[0]) || void 0 === s ? void 0 : s.message),
            {
                onlyAttachmentIds:
                    null == t
                        ? void 0
                        : t.attachments
                              .filter((e) => {
                                  let { filename: t } = e;
                                  return (0, i.CO)(t) || (0, i.NU)(t);
                              })
                              .map((e) => e.id)
            }
        );
    }
    return 'embed' === n && null != a ? { onlyEmbedIndices: [a] } : 'shortcut' === n ? {} : void 0;
}
