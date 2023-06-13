import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${size * rows
            } &fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function QuiltedImageList({ data }) {
    return (
        <ImageList
            sx={{ width: "30rem", height: "fit-content", margin: "1rem" }}
            variant="quilted"
            cols={4}
            rowHeight={121}
        >
            {data.map((item) => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                    <img
                        {...srcset(item.img, 121, item.rows, item.cols)}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    );
}

