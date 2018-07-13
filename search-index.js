var N = null;var searchIndex = {};
searchIndex["tar"]={"doc":"A library for reading and writing TAR archives","items":[[3,"Header","tar","Representation of the header of an entry in an archive",N,N],[3,"OldHeader","","Representation of the header of an entry in an archive",N,N],[12,"name","","",0,N],[12,"mode","","",0,N],[12,"uid","","",0,N],[12,"gid","","",0,N],[12,"size","","",0,N],[12,"mtime","","",0,N],[12,"cksum","","",0,N],[12,"linkflag","","",0,N],[12,"linkname","","",0,N],[12,"pad","","",0,N],[3,"UstarHeader","","Representation of the header of an entry in an archive",N,N],[12,"name","","",1,N],[12,"mode","","",1,N],[12,"uid","","",1,N],[12,"gid","","",1,N],[12,"size","","",1,N],[12,"mtime","","",1,N],[12,"cksum","","",1,N],[12,"typeflag","","",1,N],[12,"linkname","","",1,N],[12,"magic","","",1,N],[12,"version","","",1,N],[12,"uname","","",1,N],[12,"gname","","",1,N],[12,"dev_major","","",1,N],[12,"dev_minor","","",1,N],[12,"prefix","","",1,N],[12,"pad","","",1,N],[3,"GnuHeader","","Representation of the header of an entry in an archive",N,N],[12,"name","","",2,N],[12,"mode","","",2,N],[12,"uid","","",2,N],[12,"gid","","",2,N],[12,"size","","",2,N],[12,"mtime","","",2,N],[12,"cksum","","",2,N],[12,"typeflag","","",2,N],[12,"linkname","","",2,N],[12,"magic","","",2,N],[12,"version","","",2,N],[12,"uname","","",2,N],[12,"gname","","",2,N],[12,"dev_major","","",2,N],[12,"dev_minor","","",2,N],[12,"atime","","",2,N],[12,"ctime","","",2,N],[12,"offset","","",2,N],[12,"longnames","","",2,N],[12,"unused","","",2,N],[12,"sparse","","",2,N],[12,"isextended","","",2,N],[12,"realsize","","",2,N],[12,"pad","","",2,N],[3,"GnuSparseHeader","","Description of the header of a spare entry.",N,N],[12,"offset","","",3,N],[12,"numbytes","","",3,N],[3,"GnuExtSparseHeader","","Representation of the entry found to represent extended GNU sparse files.",N,N],[12,"sparse","","",4,N],[12,"isextended","","",4,N],[12,"padding","","",4,N],[3,"Entry","","A read-only view into an entry of an archive.",N,N],[3,"Archive","","A top-level representation of an archive file.",N,N],[3,"Entries","","An iterator over the entries of an archive.",N,N],[3,"Builder","","A structure for building archives",N,N],[3,"PaxExtensions","","An iterator over the pax extensions in an archive entry.",N,N],[3,"PaxExtension","","A key/value pair corresponding to a pax extension.",N,N],[4,"HeaderMode","","Declares the information that should be included when filling a Header from filesystem metadata.",N,N],[13,"Complete","","All supported metadata, including mod/access times and ownership will be included.",5,N],[13,"Deterministic","","Only metadata that is directly relevant to the identity of a file will be included. In particular, ownership and mod/access times are excluded.",5,N],[4,"EntryType","","Indicate for the type of file described by a header.",N,N],[13,"Regular","","Regular file",6,N],[13,"Link","","Hard link",6,N],[13,"Symlink","","Symbolic link",6,N],[13,"Char","","Character device",6,N],[13,"Block","","Block device",6,N],[13,"Directory","","Directory",6,N],[13,"Fifo","","Named pipe (fifo)",6,N],[13,"Continuous","","Implementation-defined 'high-performance' type, treated as regular file",6,N],[13,"GNULongName","","GNU extension - long file name",6,N],[13,"GNULongLink","","GNU extension - long link name (link target)",6,N],[13,"GNUSparse","","GNU extension - sparse file",6,N],[13,"XGlobalHeader","","Global extended header",6,N],[13,"XHeader","","Extended Header",6,N],[11,"new","","Create a new archive with the underlying object as the reader.",7,[[["r"]],["archive"]]],[11,"into_inner","","Unwrap this archive, returning the underlying object.",7,[[["self"]],["r"]]],[11,"entries","","Construct an iterator over the entries in this archive.",7,[[["self"]],["result",["entries"]]]],[11,"unpack","","Unpacks the contents tarball into the specified `dst`.",7,[[["self"],["p"]],["result"]]],[11,"set_unpack_xattrs","","Indicate whether extended file attributes (xattrs on Unix) are preserved when unpacking this archive.",7,[[["self"],["bool"]]]],[11,"set_preserve_permissions","","Indicate whether extended permissions (like suid on Unix) are preserved when unpacking this entry.",7,[[["self"],["bool"]]]],[11,"raw","","Indicates whether this iterator will return raw entries or not.",8,[[["self"],["bool"]],["entries"]]],[11,"next","","",8,[[["self"]],["option",["result"]]]],[11,"new","","Create a new archive builder with the underlying object as the destination of all data written. The builder will use `HeaderMode::Complete` by default.",9,[[["w"]],["builder"]]],[11,"mode","","Changes the HeaderMode that will be used when reading fs Metadata for methods that implicitly read metadata for an input Path. Notably, this does not apply to `append(Header)`.",9,[[["self"],["headermode"]]]],[11,"follow_symlinks","","Follow symlinks, archiving the contents of the file they point to rather than adding a symlink to the archive. Defaults to true.",9,[[["self"],["bool"]]]],[11,"into_inner","","Unwrap this archive, returning the underlying object.",9,[[["self"]],["result"]]],[11,"append","","Adds a new entry to this archive.",9,[[["self"],["header"],["r"]],["result"]]],[11,"append_data","","Adds a new entry to this archive with the specified path.",9,[[["self"],["header"],["p"],["r"]],["result"]]],[11,"append_path","","Adds a file on the local filesystem to this archive.",9,[[["self"],["p"]],["result"]]],[11,"append_file","","Adds a file to this archive with the given path as the name of the file in the archive.",9,[[["self"],["p"],["file"]],["result"]]],[11,"append_dir","","Adds a directory to this archive with the given path as the name of the directory in the archive.",9,[[["self"],["p"],["q"]],["result"]]],[11,"append_dir_all","","Adds a directory and all of its contents (recursively) to this archive with the given path as the name of the directory in the archive.",9,[[["self"],["p"],["q"]],["result"]]],[11,"finish","","Finish writing this archive, emitting the termination sections.",9,[[["self"]],["result"]]],[11,"drop","","",9,[[["self"]]]],[11,"path","","Returns the path name for this entry.",10,[[["self"]],["result",["cow"]]]],[11,"path_bytes","","Returns the raw bytes listed for this entry.",10,[[["self"]],["cow"]]],[11,"link_name","","Returns the link name for this entry, if any is found.",10,[[["self"]],["result",["option"]]]],[11,"link_name_bytes","","Returns the link name for this entry, in bytes, if listed.",10,[[["self"]],["option",["cow"]]]],[11,"pax_extensions","","Returns an iterator over the pax extensions contained in this entry.",10,[[["self"]],["result",["option"]]]],[11,"header","","Returns access to the header of this entry in the archive.",10,[[["self"]],["header"]]],[11,"raw_header_position","","Returns the starting position, in bytes, of the header of this entry in the archive.",10,[[["self"]],["u64"]]],[11,"raw_file_position","","Returns the starting position, in bytes, of the file of this entry in the archive.",10,[[["self"]],["u64"]]],[11,"unpack","","Writes this file to the specified location.",10,[[["self"],["p"]],["result"]]],[11,"unpack_in","","Extracts this file under the specified path, avoiding security issues.",10,[[["self"],["p"]],["result",["bool"]]]],[11,"set_unpack_xattrs","","Indicate whether extended file attributes (xattrs on Unix) are preserved when unpacking this entry.",10,[[["self"],["bool"]]]],[11,"set_preserve_permissions","","Indicate whether extended permissions (like suid on Unix) are preserved when unpacking this entry.",10,[[["self"],["bool"]]]],[11,"read","","",10,N],[11,"clone","","",6,[[["self"]],["entrytype"]]],[11,"eq","","",6,[[["self"],["entrytype"]],["bool"]]],[11,"ne","","",6,[[["self"],["entrytype"]],["bool"]]],[11,"fmt","","",6,[[["self"],["formatter"]],["result"]]],[11,"new","","Creates a new entry type from a raw byte.",6,[[["u8"]],["entrytype"]]],[11,"as_byte","","Returns the raw underlying byte that this entry type represents.",6,[[["self"]],["u8"]]],[11,"file","","Creates a new entry type representing a regular file.",6,[[],["entrytype"]]],[11,"hard_link","","Creates a new entry type representing a hard link.",6,[[],["entrytype"]]],[11,"symlink","","Creates a new entry type representing a symlink.",6,[[],["entrytype"]]],[11,"character_special","","Creates a new entry type representing a character special device.",6,[[],["entrytype"]]],[11,"block_special","","Creates a new entry type representing a block special device.",6,[[],["entrytype"]]],[11,"dir","","Creates a new entry type representing a directory.",6,[[],["entrytype"]]],[11,"fifo","","Creates a new entry type representing a FIFO.",6,[[],["entrytype"]]],[11,"contiguous","","Creates a new entry type representing a contiguous file.",6,[[],["entrytype"]]],[11,"is_file","","Returns whether this type represents a regular file.",6,[[["self"]],["bool"]]],[11,"is_hard_link","","Returns whether this type represents a hard link.",6,[[["self"]],["bool"]]],[11,"is_symlink","","Returns whether this type represents a symlink.",6,[[["self"]],["bool"]]],[11,"is_character_special","","Returns whether this type represents a character special device.",6,[[["self"]],["bool"]]],[11,"is_block_special","","Returns whether this type represents a block special device.",6,[[["self"]],["bool"]]],[11,"is_dir","","Returns whether this type represents a directory.",6,[[["self"]],["bool"]]],[11,"is_fifo","","Returns whether this type represents a FIFO.",6,[[["self"]],["bool"]]],[11,"is_contiguous","","Returns whether this type represents a contiguous file.",6,[[["self"]],["bool"]]],[11,"is_gnu_longname","","Returns whether this type represents a GNU long name header.",6,[[["self"]],["bool"]]],[11,"is_gnu_sparse","","Returns whether this type represents a GNU sparse header.",6,[[["self"]],["bool"]]],[11,"is_gnu_longlink","","Returns whether this type represents a GNU long link header.",6,[[["self"]],["bool"]]],[11,"is_pax_global_extensions","","Returns whether this type represents a GNU long name header.",6,[[["self"]],["bool"]]],[11,"is_pax_local_extensions","","Returns whether this type represents a GNU long link header.",6,[[["self"]],["bool"]]],[11,"clone","","",5,[[["self"]],["headermode"]]],[11,"eq","","",5,[[["self"],["headermode"]],["bool"]]],[11,"fmt","","",5,[[["self"],["formatter"]],["result"]]],[11,"new_gnu","","Creates a new blank GNU header.",11,[[],["header"]]],[11,"new_ustar","","Creates a new blank UStar header.",11,[[],["header"]]],[11,"new_old","","Creates a new blank old header.",11,[[],["header"]]],[11,"as_old","","View this archive header as a raw \"old\" archive header.",11,[[["self"]],["oldheader"]]],[11,"as_old_mut","","Same as `as_old`, but the mutable version.",11,[[["self"]],["oldheader"]]],[11,"as_ustar","","View this archive header as a raw UStar archive header.",11,[[["self"]],["option",["ustarheader"]]]],[11,"as_ustar_mut","","Same as `as_ustar_mut`, but the mutable version.",11,[[["self"]],["option",["ustarheader"]]]],[11,"as_gnu","","View this archive header as a raw GNU archive header.",11,[[["self"]],["option",["gnuheader"]]]],[11,"as_gnu_mut","","Same as `as_gnu`, but the mutable version.",11,[[["self"]],["option",["gnuheader"]]]],[11,"from_byte_slice","","Treats the given byte slice as a header.",11,N],[11,"as_bytes","","Returns a view into this header as a byte array.",11,N],[11,"as_mut_bytes","","Returns a view into this header as a byte array.",11,N],[11,"set_metadata","","Blanket sets the metadata in this header from the metadata argument provided.",11,[[["self"],["metadata"]]]],[11,"set_metadata_in_mode","","Sets only the metadata relevant to the given HeaderMode in this header from the metadata argument provided.",11,[[["self"],["metadata"],["headermode"]]]],[11,"entry_size","","Returns the size of entry's data this header represents.",11,[[["self"]],["result",["u64"]]]],[11,"size","","Returns the file size this header represents.",11,[[["self"]],["result",["u64"]]]],[11,"set_size","","Encodes the `size` argument into the size field of this header.",11,[[["self"],["u64"]]]],[11,"path","","Returns the raw path name stored in this header.",11,[[["self"]],["result",["cow"]]]],[11,"path_bytes","","Returns the pathname stored in this header as a byte array.",11,[[["self"]],["cow"]]],[11,"set_path","","Sets the path name for this header.",11,[[["self"],["p"]],["result"]]],[11,"link_name","","Returns the link name stored in this header, if any is found.",11,[[["self"]],["result",["option"]]]],[11,"link_name_bytes","","Returns the link name stored in this header as a byte array, if any.",11,[[["self"]],["option",["cow"]]]],[11,"set_link_name","","Sets the path name for this header.",11,[[["self"],["p"]],["result"]]],[11,"mode","","Returns the mode bits for this file",11,[[["self"]],["result",["u32"]]]],[11,"set_mode","","Encodes the `mode` provided into this header.",11,[[["self"],["u32"]]]],[11,"uid","","Returns the value of the owner's user ID field",11,[[["self"]],["result",["u32"]]]],[11,"set_uid","","Encodes the `uid` provided into this header.",11,[[["self"],["u32"]]]],[11,"gid","","Returns the value of the group's user ID field",11,[[["self"]],["result",["u32"]]]],[11,"set_gid","","Encodes the `gid` provided into this header.",11,[[["self"],["u32"]]]],[11,"mtime","","Returns the last modification time in Unix time format",11,[[["self"]],["result",["u64"]]]],[11,"set_mtime","","Encodes the `mtime` provided into this header.",11,[[["self"],["u64"]]]],[11,"username","","Return the user name of the owner of this file.",11,[[["self"]],["result",["option","utf8error"]]]],[11,"username_bytes","","Returns the user name of the owner of this file, if present.",11,[[["self"]],["option"]]],[11,"set_username","","Sets the username inside this header.",11,[[["self"],["str"]],["result"]]],[11,"groupname","","Return the group name of the owner of this file.",11,[[["self"]],["result",["option","utf8error"]]]],[11,"groupname_bytes","","Returns the group name of the owner of this file, if present.",11,[[["self"]],["option"]]],[11,"set_groupname","","Sets the group name inside this header.",11,[[["self"],["str"]],["result"]]],[11,"device_major","","Returns the device major number, if present.",11,[[["self"]],["result",["option"]]]],[11,"set_device_major","","Encodes the value `major` into the dev_major field of this header.",11,[[["self"],["u32"]],["result"]]],[11,"device_minor","","Returns the device minor number, if present.",11,[[["self"]],["result",["option"]]]],[11,"set_device_minor","","Encodes the value `minor` into the dev_minor field of this header.",11,[[["self"],["u32"]],["result"]]],[11,"entry_type","","Returns the type of file described by this header.",11,[[["self"]],["entrytype"]]],[11,"set_entry_type","","Sets the type of file that will be described by this header.",11,[[["self"],["entrytype"]]]],[11,"cksum","","Returns the checksum field of this header.",11,[[["self"]],["result",["u32"]]]],[11,"set_cksum","","Sets the checksum field of this header based on the current fields in this header.",11,[[["self"]]]],[11,"clone","","",11,[[["self"]],["header"]]],[11,"fmt","","",11,[[["self"],["formatter"]],["result"]]],[11,"as_header","","Views this as a normal `Header`",0,[[["self"]],["header"]]],[11,"as_header_mut","","Views this as a normal `Header`",0,[[["self"]],["header"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"path_bytes","","See `Header::path_bytes`",1,[[["self"]],["cow"]]],[11,"set_path","","See `Header::set_path`",1,[[["self"],["p"]],["result"]]],[11,"username_bytes","","See `Header::username_bytes`",1,N],[11,"set_username","","See `Header::set_username`",1,[[["self"],["str"]],["result"]]],[11,"groupname_bytes","","See `Header::groupname_bytes`",1,N],[11,"set_groupname","","See `Header::set_groupname`",1,[[["self"],["str"]],["result"]]],[11,"device_major","","See `Header::device_major`",1,[[["self"]],["result",["u32"]]]],[11,"set_device_major","","See `Header::set_device_major`",1,[[["self"],["u32"]]]],[11,"device_minor","","See `Header::device_minor`",1,[[["self"]],["result",["u32"]]]],[11,"set_device_minor","","See `Header::set_device_minor`",1,[[["self"],["u32"]]]],[11,"as_header","","Views this as a normal `Header`",1,[[["self"]],["header"]]],[11,"as_header_mut","","Views this as a normal `Header`",1,[[["self"]],["header"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"username_bytes","","See `Header::username_bytes`",2,N],[11,"set_username","","See `Header::set_username`",2,[[["self"],["str"]],["result"]]],[11,"groupname_bytes","","See `Header::groupname_bytes`",2,N],[11,"set_groupname","","See `Header::set_groupname`",2,[[["self"],["str"]],["result"]]],[11,"device_major","","See `Header::device_major`",2,[[["self"]],["result",["u32"]]]],[11,"set_device_major","","See `Header::set_device_major`",2,[[["self"],["u32"]]]],[11,"device_minor","","See `Header::device_minor`",2,[[["self"]],["result",["u32"]]]],[11,"set_device_minor","","See `Header::set_device_minor`",2,[[["self"],["u32"]]]],[11,"atime","","Returns the last modification time in Unix time format",2,[[["self"]],["result",["u64"]]]],[11,"set_atime","","Encodes the `atime` provided into this header.",2,[[["self"],["u64"]]]],[11,"ctime","","Returns the last modification time in Unix time format",2,[[["self"]],["result",["u64"]]]],[11,"set_ctime","","Encodes the `ctime` provided into this header.",2,[[["self"],["u64"]]]],[11,"real_size","","Returns the \"real size\" of the file this header represents.",2,[[["self"]],["result",["u64"]]]],[11,"is_extended","","Indicates whether this header will be followed by additional sparse-header records.",2,[[["self"]],["bool"]]],[11,"as_header","","Views this as a normal `Header`",2,[[["self"]],["header"]]],[11,"as_header_mut","","Views this as a normal `Header`",2,[[["self"]],["header"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"is_empty","","Returns true if block is empty",3,[[["self"]],["bool"]]],[11,"offset","","Offset of the block from the start of the file",3,[[["self"]],["result",["u64"]]]],[11,"length","","Length of the block",3,[[["self"]],["result",["u64"]]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"new","","Crates a new zero'd out sparse header entry.",4,[[],["gnuextsparseheader"]]],[11,"as_bytes","","Returns a view into this header as a byte array.",4,N],[11,"as_mut_bytes","","Returns a view into this header as a byte array.",4,N],[11,"sparse","","Returns a slice of the underlying sparse headers.",4,N],[11,"is_extended","","Indicates if another sparse header should be following this one.",4,[[["self"]],["bool"]]],[11,"default","","",4,[[],["self"]]],[11,"next","","",12,[[["self"]],["option",["result"]]]],[11,"key","","Returns the key for this key/value pair parsed as a string.",13,[[["self"]],["result",["str","utf8error"]]]],[11,"key_bytes","","Returns the underlying raw bytes for the key of this key/value pair.",13,N],[11,"value","","Returns the value for this key/value pair parsed as a string.",13,[[["self"]],["result",["str","utf8error"]]]],[11,"value_bytes","","Returns the underlying raw bytes for this value of this key/value pair.",13,N]],"paths":[[3,"OldHeader"],[3,"UstarHeader"],[3,"GnuHeader"],[3,"GnuSparseHeader"],[3,"GnuExtSparseHeader"],[4,"HeaderMode"],[4,"EntryType"],[3,"Archive"],[3,"Entries"],[3,"Builder"],[3,"Entry"],[3,"Header"],[3,"PaxExtensions"],[3,"PaxExtension"]]};
initSearch(searchIndex);
