import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "textFormat",
  standalone: true,
})
export class TextFormatPipe implements PipeTransform {
  transform(
    value: string,
    type: "title" | "description" = "description"
  ): string {
    if (!value) return "";

    switch (type) {
      case "title":
        return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      case "description":
        return value.charAt(0).toUpperCase() + value.slice(1);
      default:
        return value;
    }
  }
}
