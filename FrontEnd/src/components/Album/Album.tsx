import React, { Component } from 'react';
import Scrollbars from 'react-custom-scrollbars';
import { withStyles } from '@material-ui/core';
import { styles } from './albumStyles';
import { IProps } from './Album.d';


class Album extends Component<IProps> {
  render() {
    const { album, classes } = this.props;
    album.artworkUrl600 = album.artworkUrl100.replace('100x100', '600x600');
    return (
      <div className={ classes.album }>
        <Scrollbars style={ { color: '#000', width: '100%', height: '100%' } }>
          <h5 className={ classes.name }>
            { album.artistName }
          </h5>
          <div className={classes.imageContainer}>
            <a href={ album.collectionViewUrl } target={ '_blank' }>
              <img src={ album.artworkUrl600 } className={classes.image} alt={album.artistName} />
            </a>
          </div>
          <div className={ classes.albumText }>
            <div className={ classes.textWrapper }>
              <p className={ classes.bottomSection }>
                { album.collectionName }
                <a className={ classes.overview } href={ album.collectionViewUrl } target={ '_blank' }>
                  View album on iTunes
              </a>
              </p>
            </div>
          </div>
        </Scrollbars>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Album);
