(A.d(t, { Z: () => V }), A(415506), A(388685));
var n = A(73800),
    r = A(399606),
    a = A(544891),
    l = A(780384),
    i = A(570140),
    o = A(881052),
    s = A(141795),
    c = A(476326),
    d = A(983544),
    u = A(9874),
    f = A(710845),
    g = A(430824),
    p = A(861990),
    h = A(277985),
    m = A(240864),
    b = A(863663),
    v = A(981631),
    C = A(388032);
function q(e, t, A) {
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
                q(e, t, A[t]);
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
class O {
    addAttachment(e, t) {
        let A = this.target.getMaxAttachmentsCount();
        if (this.uploads.length >= A) throw (l.uv.announce(C.intl.formatToPlainString(C.t['0QDZ4O'], { maxAttachmentsCount: A })), Error('Too many attachments'));
        e.target = d.e.GUILD_PRODUCT_ATTACHMENT;
        let n = new s.n(e, this.guildId);
        (n.upload(),
            n.on('error', (A) => {
                var r;
                A === v.evJ.ENTITY_TOO_LARGE && this.onFileSizeError();
                let a = 'number' == typeof A && A > 0 ? -A : -1,
                    i = (0, b.kg)(a),
                    o = null == (r = e.file) ? void 0 : r.name;
                (null != o
                    ? l.uv.announce(
                          C.intl.formatToPlainString(C.t['+YVkfX'], {
                              filename: o,
                              reason: i
                          })
                      )
                    : l.uv.announce(C.intl.formatToPlainString(C.t.mBkf6e, { reason: i })),
                    t((e) => j(x({}, e), { [n.id]: a })));
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
            l = (function (e, t) {
                if (null == e) return {};
                var A,
                    n,
                    r = (function (e, t) {
                        if (null == e) return {};
                        var A,
                            n,
                            r = {},
                            a = Object.keys(e);
                        for (n = 0; n < a.length; n++) ((A = a[n]), t.indexOf(A) >= 0 || (r[A] = e[A]));
                        return r;
                    })(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (n = 0; n < a.length; n++) ((A = a[n]), !(t.indexOf(A) >= 0) && Object.prototype.propertyIsEnumerable.call(e, A) && (r[A] = e[A]));
                }
                return r;
            })(e, ['priceTier', 'createNewRole', 'imageName']);
        if (this.uploads.some((e) => e.status === s.m.ERROR)) throw Error('Cannot create product with failed attachments');
        'unlinkRole' in l && (t = l.unlinkRole);
        let o = this.uploads.filter((e) => !this.existingAttachmentIds.has(e.id)),
            c = this.uploads
                .filter((e) => this.existingAttachmentIds.has(e.id))
                .map((e) => {
                    var t;
                    return {
                        filename: null == (t = e.item.file) ? void 0 : t.name,
                        id: e.id
                    };
                }),
            d = (0, u.F)(),
            f = (await d.uploadFiles(o)).map((e, t) => (0, p.B)(e, t)),
            g = null != this.editSkuId ? a.tn.patch : a.tn.post,
            h = null != this.editSkuId ? v.ANM.GUILD_PRODUCT_LISTINGS(this.guildId, this.editSkuId) : v.ANM.GUILD_PRODUCTS(this.guildId),
            m = (
                await g({
                    url: h,
                    rejectWithError: !1,
                    body: j(x({}, l), {
                        price_tier: A,
                        create_new_role: n,
                        image_name: r,
                        unlink_role: t,
                        attachments: c.length > 0 ? [...c, ...f] : f
                    })
                })
            ).body;
        return (
            U.log('Created/updated product:', m),
            null != m &&
                (null != this.editSkuId
                    ? await i.Z.dispatch({
                          type: 'GUILD_PRODUCT_UPDATE',
                          product: m
                      })
                    : await i.Z.dispatch({
                          type: 'GUILD_PRODUCT_CREATE',
                          product: m
                      })),
            m
        );
    }
    constructor({ guildId: e, editSkuId: t, onFileSizeError: A }) {
        var n;
        (q(this, 'guildId', void 0),
            q(this, 'editSkuId', void 0),
            q(this, 'target', new h.Z()),
            q(this, 'onFileSizeError', void 0),
            q(this, 'existingAttachmentIds', new Set()),
            q(this, 'uploads', []),
            q(this, 'generateInitialProgresses', () => {
                let e = {};
                for (let t of this.uploads) e[t.id] = 1;
                return e;
            }),
            (this.editSkuId = t),
            (this.guildId = e),
            (this.onFileSizeError = A));
        let r = null == (n = m.Z.getGuildProduct(null != t ? t : '')) ? void 0 : n.attachments;
        null != r &&
            (this.uploads = r.map((t) => {
                var A;
                this.existingAttachmentIds.add(t.id);
                let n = new s.n(
                    {
                        id: t.id,
                        platform: c.ow.WEB,
                        file: {
                            name: t.filename,
                            lastModified: 0,
                            size: null != (A = t.size) ? A : 0
                        }
                    },
                    e
                );
                return ((n.status = s.m.COMPLETED), n);
            }));
    }
}
function V(e, t) {
    var A;
    let { editSkuId: a, onFileSizeError: l } = t,
        i = (0, r.e7)([g.Z], () => g.Z.getGuild(e)),
        [s, c] = n.useState({
            editSkuId: a,
            onFileSizeError: l
        }),
        d = n.useMemo(() => new O(x({ guildId: e }, s)), [e, s]),
        [u, f] = n.useState(d.generateInitialProgresses),
        [, p] = n.useState(null);
    n.useLayoutEffect(() => {
        f(d.generateInitialProgresses());
    }, [d]);
    let [h, m] = n.useState(),
        [b, C] = n.useState(),
        q = n.useCallback(
            (e) => {
                d.deleteAttachment(e) && p({});
            },
            [d]
        ),
        j = n.useCallback(
            (e) => {
                (d.addAttachment(e, f), p({}));
            },
            [d]
        ),
        U = n.useCallback(
            async (e) => {
                try {
                    (m(e), C(void 0));
                    let t = await d.saveProductWithAttachments(e);
                    return (
                        null != t &&
                            c({
                                editSkuId: t.id,
                                onFileSizeError: l
                            }),
                        p({}),
                        t
                    );
                } catch (e) {
                    C(
                        e instanceof o.Hx
                            ? e
                            : new o.Hx({
                                  status: 400,
                                  body: { attachments: [e.message] }
                              })
                    );
                } finally {
                    m(void 0);
                }
            },
            [d, l]
        ),
        V = n.useCallback(() => {
            (d.cancelUnusedUploads(), p({}));
        }, [d]);
    n.useEffect(
        () => () => {
            d.cancelUnusedUploads();
        },
        [d]
    );
    let { uploads: P } = d,
        y = !P.every((e) => d.existingAttachmentIds.has(e.id)) || P.length !== d.existingAttachmentIds.size;
    return {
        addAttachment: j,
        cancelUnusedUploads: V,
        deleteAttachment: q,
        fileUploadProgresses: u,
        uploads: P,
        saveProductWithAttachments: U,
        isSaving: null != h,
        changesSaving: h,
        saveError: b,
        hasUnsavedAttachmentChanges: y,
        canAttachFiles: P.length < d.target.getMaxAttachmentsCount(),
        canAttachArchives: null != (A = null == i ? void 0 : i.hasFeature(v.oNc.GUILD_PRODUCTS_ALLOW_ARCHIVED_FILE)) && A
    };
}
