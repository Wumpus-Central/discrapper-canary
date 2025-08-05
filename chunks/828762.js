(A.d(t, { Z: () => P }), A(415506), A(388685));
var n = A(73800),
    r = A(399606),
    l = A(544891),
    a = A(780384),
    o = A(570140),
    i = A(881052),
    s = A(141795),
    d = A(476326),
    c = A(983544),
    u = A(9874),
    f = A(710845),
    g = A(430824),
    p = A(861990),
    m = A(277985),
    h = A(240864),
    C = A(863663),
    q = A(981631),
    b = A(388032);
function v(e, t, A) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: A,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = A),
        e
    );
}
function x(e) {
    for (var t = 1; t < arguments.length; t++) {
        var A = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(A);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(A).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(A, e).enumerable;
                })
            )),
            n.forEach(function (t) {
                v(e, t, A[t]);
            }));
    }
    return e;
}
function j(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : (function (e, t) {
                  var A = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                      var n = Object.getOwnPropertySymbols(e);
                      A.push.apply(A, n);
                  }
                  return A;
              })(Object(t)).forEach(function (A) {
                  Object.defineProperty(e, A, Object.getOwnPropertyDescriptor(t, A));
              }),
        e
    );
}
let U = new f.Z('ProductAttachmentManager');
class V {
    addAttachment(e, t) {
        let A = this.target.getMaxAttachmentsCount();
        if (this.uploads.length >= A) throw (a.uv.announce(b.intl.formatToPlainString(b.t['0QDZ4O'], { maxAttachmentsCount: A })), Error('Too many attachments'));
        e.target = c.e.GUILD_PRODUCT_ATTACHMENT;
        let n = new s.nH(e, this.guildId);
        (n.upload(),
            n.on('error', (A) => {
                var r;
                A === q.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
                let l = 'number' == typeof A && A > 0 ? -A : -1,
                    o = (0, C.kg)(l),
                    i = null == (r = e.file) ? void 0 : r.name;
                (null != i
                    ? a.uv.announce(
                          b.intl.formatToPlainString(b.t['+YVkfX'], {
                              filename: i,
                              reason: o
                          })
                      )
                    : a.uv.announce(b.intl.formatToPlainString(b.t.mBkf6e, { reason: o })),
                    t((e) => j(x({}, e), { [n.id]: l })));
            }),
            n.on('progress', (e, A) => {
                t((t) => j(x({}, t), { [n.id]: e / A }));
            }),
            (this.uploads = [...this.uploads, n]));
    }
    deleteAttachment(e) {
        let t = this.uploads.findIndex((t) => t.id === e);
        return -1 !== t && ((this.uploads = [...this.uploads]), this.uploads.splice(t, 1)[0].cancel(), !0);
    }
    cancelUnusedUploads() {
        for (let e of this.uploads) e.cancel();
        this.uploads = [];
    }
    async saveProductWithAttachments(e) {
        let t;
        var { priceTier: A, createNewRole: n, imageName: r } = e,
            a = (function (e, t) {
                if (null == e) return {};
                var A,
                    n,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var A,
                            n,
                            r = {},
                            l = Object.keys(e);
                        for (n = 0; n < l.length; n++) ((A = l[n]), t.indexOf(A) >= 0 || (r[A] = e[A]));
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var l = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < l.length; n++) ((A = l[n]), !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (r[A] = e[A]));
                }
                return r;
            })(e, ['priceTier', 'createNewRole', 'imageName']);
        if (this.uploads.some((e) => e.status === s.mw.ERROR)) throw Error('Cannot create product with failed attachments');
        'unlinkRole' in a && (t = a.unlinkRole);
        let i = this.uploads.filter((e) => !this.existingAttachmentIds.has(e.id)),
            d = this.uploads
                .filter((e) => this.existingAttachmentIds.has(e.id))
                .map((e) => {
                    var t;
                    return {
                        filename: null == (t = e.item.file) ? void 0 : t.name,
                        id: e.id
                    };
                }),
            c = (0, u.F)(),
            f = (await c.uploadFiles(i)).map((e, t) => (0, p.B)(e, t)),
            g = null != this.editSkuId ? l.tn.patch : l.tn.post,
            m = null != this.editSkuId ? q.ANM.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId) : q.ANM.GUILD_PRODUCTS(this.guildId),
            h = (
                await g({
                    url: m,
                    rejectWithError: !1,
                    body: j(x({}, a), {
                        price_tier: A,
                        create_new_role: n,
                        image_name: r,
                        unlink_role: t,
                        attachments: d.length > 0 ? [...d, ...f] : f
                    })
                })
            ).body;
        return (
            U.log('Created/updated product:', h),
            null != h &&
                (null != this.editSkuId
                    ? await o.Z.dispatch({
                          type: 'GUILD_PRODUCT_UPDATE',
                          product: h
                      })
                    : await o.Z.dispatch({
                          type: 'GUILD_PRODUCT_CREATE',
                          product: h
                      })),
            h
        );
    }
    constructor({ guildId: e, editSkuId: t, onFileSizeError: A }) {
        var n;
        (v(this, 'guildId', void 0),
            v(this, 'editSkuId', void 0),
            v(this, 'target', new m.Z()),
            v(this, 'onFileSizeError', void 0),
            v(this, 'existingAttachmentIds', new Set()),
            v(this, 'uploads', []),
            v(this, 'generateInitialProgresses', () => {
                let e = {};
                for (let t of this.uploads) e[t.id] = 1;
                return e;
            }),
            (this.editSkuId = t),
            (this.guildId = e),
            (this.onFileSizeError = A));
        let r = null == (n = h.Z.getGuildProduct(null != t ? t : '')) ? void 0 : n.attachments;
        null != r &&
            (this.uploads = r.map((t) => {
                var A;
                this.existingAttachmentIds.add(t.id);
                let n = new s.nH(
                    {
                        id: t.id,
                        platform: d.ow.WEB,
                        file: {
                            name: t.filename,
                            lastModified: 0,
                            size: null != (A = t.size) ? A : 0
                        }
                    },
                    e
                );
                return ((n.status = s.mw.COMPLETED), n);
            }));
    }
}
function P(e, t) {
    var A;
    let { editSkuId: l, onFileSizeError: a } = t,
        o = (0, r.e7)([g.Z], () => g.Z.getGuild(e)),
        [s, d] = n.useState({
            editSkuId: l,
            onFileSizeError: a
        }),
        c = n.useMemo(() => new V(x({ guildId: e }, s)), [e, s]),
        [u, f] = n.useState(c.generateInitialProgresses),
        [, p] = n.useState(null);
    n.useLayoutEffect(() => {
        f(c.generateInitialProgresses());
    }, [c]);
    let [m, h] = n.useState(),
        [C, b] = n.useState(),
        v = n.useCallback(
            (e) => {
                c.deleteAttachment(e) && p({});
            },
            [c]
        ),
        j = n.useCallback(
            (e) => {
                (c.addAttachment(e, f), p({}));
            },
            [c]
        ),
        U = n.useCallback(
            async (e) => {
                try {
                    (h(e), b(void 0));
                    let t = await c.saveProductWithAttachments(e);
                    return (
                        null != t &&
                            d({
                                editSkuId: t.id,
                                onFileSizeError: a
                            }),
                        p({}),
                        t
                    );
                } catch (e) {
                    b(
                        e instanceof i.Hx
                            ? e
                            : new i.Hx({
                                  status: 400,
                                  body: { attachments: [e.message] }
                              })
                    );
                } finally {
                    h(void 0);
                }
            },
            [c, a]
        ),
        P = n.useCallback(() => {
            (c.cancelUnusedUploads(), p({}));
        }, [c]);
    n.useEffect(
        () => () => {
            c.cancelUnusedUploads();
        },
        [c]
    );
    let { uploads: O } = c,
        I = !O.every((e) => c.existingAttachmentIds.has(e.id)) || O.length !== c.existingAttachmentIds.size;
    return {
        addAttachment: j,
        cancelUnusedUploads: P,
        deleteAttachment: v,
        fileUploadProgresses: u,
        uploads: O,
        saveProductWithAttachments: U,
        isSaving: null != m,
        changesSaving: m,
        saveError: C,
        hasUnsavedAttachmentChanges: I,
        canAttachFiles: O.length < c.target.getMaxAttachmentsCount(),
        canAttachArchives: null != (A = null == o ? void 0 : o.features.has(q.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && A
    };
}
