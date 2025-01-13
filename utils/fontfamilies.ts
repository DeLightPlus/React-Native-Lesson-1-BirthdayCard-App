// fontFamilyUtils.ts

// Predefined list of available font families (all lowercase)
const availableFontFamilies: string[] = [
    "arial", 
    "courier new", 
    "georgia", 
    "times new roman", 
    "verdana", 
    "tahoma", 
    "trebuchet ms", 
    "roboto", 
    "open sans",
    "lato",
    "montserrat",
    // Add any additional font families here
  ];
  
  /**
   * Normalize font family name (to account for case and spacing variations)
   * @param fontFamily - The font family string to normalize
   * @returns Normalized font family name (always lowercase)
   */
  export const normalizeFontFamily = (fontFamily: string): string => {
    return fontFamily.trim().toLowerCase(); // Ensures lowercase comparison
  };
  
  /**
   * Check if a font family is available in the list of predefined font families.
   * @param fontFamily - The font family string to check
   * @returns Boolean indicating whether the font family is available
   */
  export const isValidFontFamily = (fontFamily: string): boolean => {
    return availableFontFamilies.includes(normalizeFontFamily(fontFamily)); // Checks if normalized fontFamily exists
  };
  
  /**
   * Get the font family, or a default font family if the input is invalid.
   * @param fontFamily - The font family to validate
   * @param defaultFontFamily - The default font family to use if the input is invalid
   * @returns Valid font family string
   */
  export const getFontFamily = (fontFamily: string, defaultFontFamily: string = "arial"): string => {
    return isValidFontFamily(fontFamily) ? normalizeFontFamily(fontFamily) : defaultFontFamily;
  };
  
  /**
   * Get a list of all available font families.
   * @returns Array of available font family names (lowercase)
   */
  export const getAvailableFontFamilies = (): string[] => {
    return availableFontFamilies; // Returns the list as it is (all lowercase)
  };
  