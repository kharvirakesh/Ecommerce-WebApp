import React, { useEffect, useState } from "react";
import styles from '../../styles/productCard.module.css';

interface IWishListProps {
  isWishlisted: boolean;
  onWishlistClick: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

export const Wishlist = ({ isWishlisted, onWishlistClick }: IWishListProps) => {
  const [isWished, setisWished] = useState<boolean>(isWishlisted);
  const handleWishlistClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation(); // Prevents the click event from propagating to the parent link
    e.preventDefault();
    console.log("a");
    setisWished(!isWished);
    // onWishlistClick(e); // Execute your wishlist method here
  };

  return (
    <div
      className={styles.whishlist}
      onClick={(e) => {
        handleWishlistClick(e);
      }}
    >
      {isWished ? (
        <div>
          <svg
            width='30'
            height='27'
            viewBox='0 0 28 27'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_d_128_220)'>
              <path
                d='M14 18.35L12.55 17.03C7.4 12.36 4 9.27 4 5.5C4 2.41 6.42 0 9.5 0C11.24 0 12.91 0.81 14 2.08C15.09 0.81 16.76 0 18.5 0C21.58 0 24 2.41 24 5.5C24 9.27 20.6 12.36 15.45 17.03L14 18.35Z'
                fill='#F43939'
              />
            </g>
            <defs>
              <filter
                id='filter0_d_128_220'
                x='0'
                y='0'
                width='28'
                height='26.35'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                  result='hardAlpha'
                />
                <feOffset dy='4' />
                <feGaussianBlur stdDeviation='2' />
                <feComposite in2='hardAlpha' operator='out' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
                />
                <feBlend
                  mode='normal'
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow_128_220'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='effect1_dropShadow_128_220'
                  result='shape'
                />
              </filter>
            </defs>
          </svg>
        </div>
      ) : (
        <svg
          width='30'
          height='27'
          viewBox='0 0 30 27'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <g filter='url(#filter0_dd_128_215)'>
            <path
              d='M19.625 0C17.5742 0 15.791 0.924805 14.7422 2.47461C13.6934 0.924805 11.9102 0 9.85938 0C8.30593 0.00180919 6.81662 0.619715 5.71817 1.71817C4.61972 2.81662 4.00181 4.30593 4 5.85938C4 8.71094 5.77734 11.6787 9.2832 14.6787C10.8897 16.0476 12.625 17.2577 14.4648 18.292C14.5501 18.3378 14.6454 18.3618 14.7422 18.3618C14.839 18.3618 14.9343 18.3378 15.0195 18.292C16.8594 17.2577 18.5947 16.0476 20.2012 14.6787C23.707 11.6787 25.4844 8.71094 25.4844 5.85938C25.4826 4.30593 24.8647 2.81662 23.7662 1.71817C22.6678 0.619715 21.1784 0.00180919 19.625 0ZM14.7422 17.1006C13.1396 16.1758 5.17188 11.3008 5.17188 5.85938C5.17317 4.61657 5.66744 3.42504 6.54624 2.54624C7.42504 1.66744 8.61657 1.17317 9.85938 1.17188C11.8398 1.17188 13.5029 2.22949 14.2002 3.93262C14.2443 4.04008 14.3194 4.132 14.4159 4.19669C14.5124 4.26138 14.626 4.29592 14.7422 4.29592C14.8584 4.29592 14.9719 4.26138 15.0684 4.19669C15.1649 4.132 15.24 4.04008 15.2842 3.93262C15.9814 2.22949 17.6445 1.17188 19.625 1.17188C20.8678 1.17317 22.0593 1.66744 22.9381 2.54624C23.8169 3.42504 24.3112 4.61657 24.3125 5.85938C24.3125 11.3008 16.3447 16.1758 14.7422 17.1006Z'
              fill='white'
            />
          </g>
          <defs>
            <filter
              id='filter0_dd_128_215'
              x='0'
              y='0'
              width='29.4844'
              height='26.3618'
              filterUnits='userSpaceOnUse'
              colorInterpolationFilters='sRGB'
            >
              <feFlood floodOpacity='0' result='BackgroundImageFix' />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='BackgroundImageFix'
                result='effect1_dropShadow_128_215'
              />
              <feColorMatrix
                in='SourceAlpha'
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                result='hardAlpha'
              />
              <feOffset dy='4' />
              <feGaussianBlur stdDeviation='2' />
              <feComposite in2='hardAlpha' operator='out' />
              <feColorMatrix
                type='matrix'
                values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0'
              />
              <feBlend
                mode='normal'
                in2='effect1_dropShadow_128_215'
                result='effect2_dropShadow_128_215'
              />
              <feBlend
                mode='normal'
                in='SourceGraphic'
                in2='effect2_dropShadow_128_215'
                result='shape'
              />
            </filter>
          </defs>
        </svg>
      )}
    </div>
  );
};
