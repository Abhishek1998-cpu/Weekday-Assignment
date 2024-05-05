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
