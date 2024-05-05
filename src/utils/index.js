export const showDescription = (desc) => {
    const trimmedDescription = desc?.split(/\s+/)?.slice?.(0, 75)?.join(" ");
    const finalDescription =
        desc?.split(/\s+/).length > 75
            ? `${trimmedDescription}...`
            : trimmedDescription;
    return finalDescription;
};

export function capitalizeFirstWord(str) {
    if (!str) {
        return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const styleObj = {
    inputLabel: {
        fontSize: "13px",
        color: "rgb(128, 128, 128)",
    },
    selectDropdown: {
        fontSize: "13px",
        color: "rgb(128, 128, 128)",
        textAlign: "left",
    },
    jobCardActionButton: {
        width: "100%",
        color: "black",
        borderRadius: "8px",
        backgroundColor: "rgb(85, 239, 196)",
        padding: "8px 18px",
        marginBottom: "1rem",
        border: "none",
        fontWeight: "600",
        textTransform: "none",
    }
};
