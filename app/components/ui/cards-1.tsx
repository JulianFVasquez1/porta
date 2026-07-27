import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";

// Define the props for the component
interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  imageUrl: string;
  title: string;
  category: string;
  href: string;
  description?: string;
  tags?: string[];
  onSave?: () => void;
}

const ProductCard = React.forwardRef<HTMLDivElement, ProductCardProps>(
  ({ className, imageUrl, title, category, href, description, tags, onSave, ...props }, ref) => {
    // Prevent click event from bubbling up from the button to the parent link
    const handleSaveClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      e.stopPropagation();
      if (onSave) {
        onSave();
      }
    };

    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950/80 text-white backdrop-blur-sm transition-all duration-500 hover:border-yellow-400/50 hover:shadow-2xl hover:shadow-yellow-400/5",
          className
        )}
        {...props}
      >
        <a href={href} aria-label={title} className="flex flex-col flex-1">
          {/* Image container with aspect ratio */}
          <div className="relative aspect-video w-full overflow-hidden bg-zinc-900">
            <img
              src={imageUrl}
              alt={title}
              className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
          </div>
          {/* Card content */}
          <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
            <div className="space-y-2">
              <span className="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded bg-zinc-900 text-yellow-400 border border-yellow-400/20 inline-block">
                {category}
              </span>
              <h3 className="text-xl font-bold leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                {title}
              </h3>
              {description && (
                <p className="text-xs text-zinc-400 font-light leading-relaxed">
                  {description}
                </p>
              )}
            </div>

            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-zinc-900/90 text-zinc-300 border border-zinc-800/90"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </a>

        {/* Save button - appears on hover */}
        <Button
          variant="secondary"
          size="icon"
          className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/60 text-yellow-400 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100 border border-yellow-400/30 hover:bg-yellow-400 hover:text-black"
          onClick={handleSaveClick}
          aria-label="Guardar proyecto"
        >
          <Bookmark className="h-4 w-4" />
        </Button>
      </div>
    );
  }
);

ProductCard.displayName = "ProductCard";

export { ProductCard };
