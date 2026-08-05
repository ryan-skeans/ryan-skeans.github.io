import { useLayoutEffect, useRef } from "react";

const FACE_STROKES = [
    "M67.6421 59.0543C66.7541 56.8541 64.3447 46.2722 63.9071 37.8097C63.8039 35.8132 64.7095 32.6073 66.2493 27.4082C67.9297 21.7347 70.7411 17.9865 72.7611 15.7858C75.0264 13.3179 79.3621 10.7516 85.1768 7.37505C91.6381 3.62306 96.6038 2.13948 101.49 1.64363C105.282 1.25879 111.778 1.06167 116.454 1.00477C127.806 0.866644 132.924 3.74847 136.083 6.41519C137.339 7.47555 138.286 8.92271 139.492 10.2921C140.787 11.7637 143.482 19.7932 147.086 30.8208C148.718 40.2003 148.419 48.1973 147.64 49.3248C147.159 49.9127 146.504 50.5326 145.83 51.1712",
    "M69.7903 56.1699C70.5853 56.1699 74.8294 56.6853 86.4733 57.466C94.2696 57.9887 105.95 57.7307 113.897 57.454C130.369 56.8807 133.09 55.0153 135.42 54.2962C139.337 53.1207 145.138 51.8818 146.203 51.6679C146.743 51.5601 147.283 51.4539 148.577 51.1337",
    "M67.4437 55.2852C67.3376 55.2852 66.633 55.1626 60.3077 54.8991C54.6355 54.6629 43.9512 54.6033 34.9471 54.9439C25.943 55.2845 18.9396 56.1255 14.1514 56.8854C6.95413 58.0278 3.92842 59.5418 2.82617 60.7073C1.86419 61.7244 1.50785 63.3937 1.06909 64.9361C0.755171 66.0395 1.56995 67.0157 2.42412 67.8968C4.37586 69.9102 10.1147 70.487 19.4779 71.4244C24.8462 71.9618 31.5374 71.7431 39.502 71.1209C47.4667 70.4987 56.5201 69.2543 62.4401 68.3717C74.5496 66.5665 78.2243 64.7999 82.6579 63.7446C84.5755 63.1805 87.5726 62.2133 89.4209 61.4349C91.2692 60.6565 91.8779 60.0962 92.664 59.519",
    "M104.241 12.7976C103.332 12.5836 97.6083 13.2367 93.2533 15.0223C91.2581 15.8404 90.5357 17.6228 90.2435 18.7482C89.3947 22.017 91.3271 24.6723 93.3263 27.0271C95.9332 30.0977 98.6524 30.9916 101.212 31.98C107.362 34.3548 109.993 35.4224 111.898 37.2167C112.926 38.1848 113.207 39.4718 113.075 40.5829C112.897 42.098 111.498 43.1391 110.06 43.9098C102.719 44.9094 95.067 45.3425 92.7115 45.7601C91.7595 45.9194 91.3019 45.9719 89.6044 46.3942",
    "M101.938 25.4113C103.198 27.8782 105.883 34.2363 106.357 37.1411C106.877 40.335 107.038 42.6187 107.603 45.841C107.874 47.6968 108.069 49.3528 108.252 50.6186C108.366 51.2098 108.524 51.6969 108.686 52.5169",
    "M104.79 24.0566C105.417 24.0566 111.5 24.7443 116.806 26.1648C120.157 27.0619 121.941 31.0153 123.996 33.326C125.976 35.5516 127.654 37.5287 128.853 40.0257C130.516 43.4877 129.229 46.6257 128.673 47.5986C127.243 50.0998 123.907 49.8887 120.689 50.7217C117.831 51.1247 114.312 51.435 111.814 52.3751C111.339 52.5976 110.861 52.755 110.208 52.9173",
    "M69.4972 68.2367C69.2496 69.0681 68.9002 74.749 68.6359 78.9373C68.5633 80.0872 70.1476 86.9387 72.6816 96.963C73.8793 101.701 75.2814 104.166 77.5099 107.661C80.4514 112.276 83.0597 114.893 85.516 116.945C91.3923 121.853 96.969 125.162 99.2634 126.109C105.001 128.476 113.726 125.965 120.277 122.235C125.723 119.134 128.012 114.922 130.279 111.584C131.497 109.789 133.065 107.771 135.446 103.361C139.249 96.3166 140.169 88.878 141.39 81.601C142.253 76.4518 142.055 71.1294 143.869 65.7432C147.024 58.1224 149.128 52.9604 149.363 51.4604C149.46 50.6375 149.513 49.6892 149.406 48.5513",
    "M91.7382 72.5669C91.7382 72.6194 91.7382 72.6719 91.6949 74.9636C91.6515 77.2554 91.5648 81.7847 91.5632 84.3769C91.5616 86.9691 91.6477 87.4869 91.7364 88.0204",
    "M118.751 67.8936C118.698 67.9985 118.645 68.1035 118.669 69.6125C118.693 71.1215 118.797 74.0314 118.944 76.0654C119.092 78.0993 119.282 79.1691 119.686 81.4294",
    "M85.7334 94.7276C85.7334 95.8179 86.9023 100.839 90.1056 106.179C91.384 108.31 93.7829 109.516 96.6125 110.748C100.013 112.229 106.237 113.164 113.268 114.527C116.226 115.1 117.994 115.15 119.166 115.012C120.876 114.472 121.931 113.156 122.865 111.611C123.298 110.97 123.646 110.618 124.005 110.256",
];

const DRAW_SPEED_PX_PER_SECOND = 1400;
const STROKE_WIDTH_PX = 5.25;
const CAP_BUFFER_PX = STROKE_WIDTH_PX;

const getRenderedLength = (stroke: SVGGeometryElement) => {
    const svgLength = stroke.getTotalLength();
    const matrix = stroke.getScreenCTM();

    if (!matrix) {
        return Math.max(svgLength, 0.1);
    }

    const horizontalScale = Math.hypot(matrix.a, matrix.b);
    const verticalScale = Math.hypot(matrix.c, matrix.d);
    const renderedScale = (horizontalScale + verticalScale) / 2;

    return Math.max(svgLength * renderedScale, 0.1);
};

export const HandDrawnFace = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    useLayoutEffect(() => {
        const svg = svgRef.current;

        if (!svg) {
            return;
        }

        const strokes = Array.from(
            svg.querySelectorAll<SVGGeometryElement>(".face-stroke")
        );

        const prefersReducedMotion = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches;

        if (prefersReducedMotion) {
            svg.style.visibility = "visible";
            return;
        }

        const steps = strokes.map((stroke) => {
            const renderedLength = getRenderedLength(stroke);

            /*
             * The oversized gap hides the rounded line caps while each
             * stroke is waiting for its turn to be drawn.
             */
            const hiddenOffset = renderedLength + CAP_BUFFER_PX;
            const gapLength = renderedLength + CAP_BUFFER_PX * 2;

            const durationSeconds = hiddenOffset / DRAW_SPEED_PX_PER_SECOND;

            stroke.style.strokeDasharray = `${renderedLength} ${gapLength}`;

            stroke.style.strokeDashoffset = `${hiddenOffset}`;
            stroke.style.transition = "none";

            return {
                stroke,
                durationSeconds,
            };
        });

        svg.style.visibility = "visible";

        /*
         * Force the browser to commit the completely hidden state before
         * transitioning the dash offsets to zero.
         */
        svg.getBoundingClientRect();

        let secondFrameId: number | undefined;

        const firstFrameId = window.requestAnimationFrame(() => {
            secondFrameId = window.requestAnimationFrame(() => {
                let delaySeconds = 0;

                steps.forEach(({ stroke, durationSeconds }) => {
                    stroke.style.transition = `stroke-dashoffset ${durationSeconds}s linear ${delaySeconds}s`;

                    stroke.style.strokeDashoffset = "0";

                    delaySeconds += durationSeconds;
                });
            });
        });

        return () => {
            window.cancelAnimationFrame(firstFrameId);

            if (secondFrameId !== undefined) {
                window.cancelAnimationFrame(secondFrameId);
            }

            steps.forEach(({ stroke }) => {
                stroke.style.transition = "none";
                stroke.style.strokeDasharray = "";
                stroke.style.strokeDashoffset = "";
            });
        };
    }, []);

    return (
        <svg
            ref={svgRef}
            viewBox="0 0 151 129"
            role="img"
            aria-label="Hand-drawn face illustration"
            className="h-full w-full text-gray-900 dark:text-white"
            style={{
                visibility: "hidden",
                overflow: "visible",
            }}
        >
            {FACE_STROKES.map((pathData, index) => (
                <path
                    key={index}
                    className="face-stroke"
                    d={pathData}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={STROKE_WIDTH_PX}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    vectorEffect="non-scaling-stroke"
                />
            ))}
        </svg>
    );
};
