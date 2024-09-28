// src/components/InstagramBanner.jsx
import React from 'react';
import InstagramFeed from 'react-instagram-feed';

const InstagramBanner = () => {
    return (
        <div className="instagram-banner">
            <InstagramFeed
                token="5bb0374aca6d625d1a6ce37dcae0274e"
                counter={6}
                className="instagram-feed"
            />
        </div>
    );
};

export default InstagramBanner;
