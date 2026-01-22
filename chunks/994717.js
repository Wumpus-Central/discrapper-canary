n.d(t, {
    C: () => a,
});
var r = n(636401),
    i = n(613057),
    l = n(652215);

function a(e) {
    if (i.z4.IPC !== e && i.z4.POST_MESSAGE !== e)
        throw new r.A(
            {
                errorCode: l.Lw6.INVALID_COMMAND,
            },
            "Invalid transport.",
        );
}
