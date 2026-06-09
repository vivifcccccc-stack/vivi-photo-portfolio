const siteBasePath = process.env.GITHUB_PAGES === "true" ? "/vivi-photo-portfolio" : "";

export function sitePath(path) {
  return `${siteBasePath}${path}`;
}
