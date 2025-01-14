export class ImagesUrl {
  public static readonly URL_BASE = "http://localhost:3000/";
  public static readonly IMAGES = "images/";
  public static readonly SAVE = "save";
  public static readonly DELETE = "delete";
  public static readonly GET = "get-by-filters";

  public static readonly URL_SAVE_IMAGES = this.URL_BASE + this.IMAGES + this.SAVE;
  public static readonly URL_DELETE_IMAGES = this.URL_BASE + this.IMAGES + this.DELETE;
  public static readonly URL_GET_IMAGES = this.URL_BASE + this.IMAGES + this.GET;
}
