<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'davidbrany' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'm#Ib1[1|H:E_|~h6b<3+@#-_)iy1?k;:S.Ix/XW.b/zGb8C-}os7<s42EPFOq6{&' );
define( 'SECURE_AUTH_KEY',  'aqX~&Zm7;<YBF^+1 |4P8ZuyCmqN(,*c=}EN<Zea-ar#r&YvvSU}1ODBB.&OoXir' );
define( 'LOGGED_IN_KEY',    'gyzoiJKnLmNeuIVUTSgN!CHzdT ]S{!p%X@@^W5[l|!,1MEFX(>Yk m+s1)&MZF6' );
define( 'NONCE_KEY',        ']!T3VNE8V_@jF;6IcmQ@UBP6-G$k*S<FJ#auz]I+zQ9o6;~8Zcnk}#4!~ATGwf~q' );
define( 'AUTH_SALT',        'zvaOPFx$OL{FgK1LQCjR#WY$>OD%K4%RbnX{*I#7OY&0#!FkvUy#Ur_oBf4.RimS' );
define( 'SECURE_AUTH_SALT', 'Lp{y<QHsc6RmnJrw!_AIgi10/hrULrz^f-s@Q*dbb*q{MrL7CLD___2h$~#*Ahkd' );
define( 'LOGGED_IN_SALT',   ']7*cR?({@)eyi3X<57w$xb?)s9VOe<Lh[@7)hEa]0*fy04@GFS2&=bTJdZb+F+BD' );
define( 'NONCE_SALT',       'O1*QCA#H<;;q3zno&565D~Gi$4c`IsFi C/VZl1$1lcH;Ydo|9vJ)6uKAcT4HdyD' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'db_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
