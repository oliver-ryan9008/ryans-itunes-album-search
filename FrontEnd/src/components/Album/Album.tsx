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
        <Scrollbars style={{color: '#000', width: '100%', height: '100%'}}>
        <h5 className={classes.name}>
          { album.artistName }
        </h5>
        <div className={ classes.imageContainer }>
          <img className={ classes.image } src={ album.artworkUrl600 } alt={ album.artistName }/>
        </div>
        <div className={ classes.albumText }>
          <div className={classes.textWrapper}>
          <p className={classes.bottomSection}>
              { album.collectionName }
              <a className={ classes.overview } href={album.collectionViewUrl}>
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
