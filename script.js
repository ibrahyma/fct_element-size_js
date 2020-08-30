function convertStrPixelsValueToFloat(pixels_val)
{
    if (/^[0-9]+(\.[0-9]+)?\s*px$/.test(pixels_val))
        return Number.parseFloat(pixels_val.replace(/\s*px/, ""));
    else
        throw new Error("Ce paramètre n'est pas une valeur en pixels.");
}

function getHeightElement(element, layout = 0)
{
    if (element instanceof Element)
    {
        var style = getComputedStyle(element, null);
        var height = 0;
        var total = layout;

        if (total >= 16)
        {
            height += convertStrPixelsValueToFloat(style.height);
            total -= 16;
        }
        if (total >= 8)
        {
            height += convertStrPixelsValueToFloat(style.marginTop);
            total -= 8;
        }
        if (total >= 4)
        {
            height += convertStrPixelsValueToFloat(style.marginBottom);
            total -= 4;
        }
        if (total >= 2)
        {
            height += convertStrPixelsValueToFloat(style.paddingTop);
            total -= 2;
        }
        if (total >= 1)
        {
            height += convertStrPixelsValueToFloat(style.paddingBottom);
            total -= 1;
        }
        return height;
    }
    else
    {
        throw new TypeError("Ce paramètre n'est pas un Element.");
    }
}

function getWidthElement(element, layout = 0)
{
    if (element instanceof Element)
    {
        var style = getComputedStyle(element, null);
        var height = 0;
        var total = layout;

        if (total >= 16)
        {
            height += convertStrPixelsValueToFloat(style.width);
            total -= 16;
        }
        if (total >= 8)
        {
            height += convertStrPixelsValueToFloat(style.marginRight);
            total -= 8;
        }
        if (total >= 4)
        {
            height += convertStrPixelsValueToFloat(style.marginLeft);
            total -= 4;
        }
        if (total >= 2)
        {
            height += convertStrPixelsValueToFloat(style.paddingRight);
            total -= 2;
        }
        if (total >= 1)
        {
            height += convertStrPixelsValueToFloat(style.paddingLeft);
            total -= 1;
        }
        return height;
    }
    else
    {
        throw new TypeError("Ce paramètre n'est pas un Element.");
    }
}
