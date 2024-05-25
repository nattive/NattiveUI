/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/strict-boolean-expressions */
import React, { useState } from 'react';
import { ScrollView, TouchableOpacity } from 'react-native';
// import * as DocumentPicker from 'expo-document-picker';
import Box from '../Box';
import Text from '../Text';
import { DocumentAsset, FileUploadProps } from './FileUpload.props';
import { AntDesign } from '@expo/vector-icons';

const FileUpload: React.FC<FileUploadProps> = ({
  label,
  errorMessage,
  hintMessage,
  onChange,
  multiple,
  accept = 'Image',
}) => {
  // const currentMode = useColorScheme();

  // const { colors } = useTheme();

  // const [assets, setAssets] = useState<DocumentPicker.DocumentPickerAsset[] | null>();

  // const onAddFile = async () => {
  //   const result = await DocumentPicker.getDocumentAsync({
  //     type:
  //       accept === 'Image'
  //         ? ['application/pdf', 'image/*']
  //         : accept === 'Video'
  //           ? ['video/*']
  //           : ['application/pdf', 'image/*'],
  //     multiple,
  //   });
  //   const pickedAssets: DocumentAsset[] = [];
  //   result.assets?.map((ass, index) =>
  //     pickedAssets.push({
  //       ...ass,
  //       name: ass.name || `untitled-${index}`,
  //       type: ass.mimeType,
  //     })
  //   );

  //   if (result.canceled) {
  //     setAssets(null);
  //     return;
  //   }
  //   if (typeof onChange === 'function') {
  //     onChange(pickedAssets);
  //   }
  //   setAssets(result.assets);
  // };

  return (
    <Box>
      {!!label && (
        <Text mb="s" fontSize={14}>
          {label}
        </Text>
      )}
      {/* <TouchableOpacity onPress={onAddFile}>
        <Box
          alignItems="center"
          justifyContent="center"
          padding="s"
          borderWidth={1}
          borderRadius="sm"
          borderStyle="dashed"
          backgroundColor="label"
          height={100}
          borderColor={errorMessage ? 'error' : 'grey200'}
        >
          <Text variant="body" fontSize={14} color="grey100">
            Select a file to upload
          </Text>
          <Text variant="body" color="label" fontSize={12}>
            {`Only ${accept === 'Image' ? 'Jpeg & PNG' : accept === 'Video' ? 'mp4, 3pg' : 'JPEG, PNG, PDF'} formats. 5 mb max file size`}
          </Text>
        </Box>
      </TouchableOpacity>
      {assets?.length && (
        <Text my="m" variant="body" fontSize={12} color="label">
          Selected files
        </Text>
      )}
      <ScrollView horizontal>
        {assets?.map((asset) => (
          <Box
            key={asset.name}
            flexDirection="row"
            justifyContent="space-between"
            padding="s"
            borderWidth={1}
            borderRadius="sm"
            width={300}
            ml="m"
            backgroundColor="grey200"
            borderColor={errorMessage ? 'error' : 'label'}
          >
            <Box width={200}>
              <Text numberOfLines={1} variant="body" fontSize={12} color="label">
                {asset?.name || asset.file?.name || 'untitled file'}
              </Text>
            </Box>
            <TouchableOpacity
              onPress={() => {
                const temAsset = assets.filter((a) => a.uri !== asset.uri);
                if (temAsset.length) {
                  setAssets(temAsset);
                } else {
                  setAssets([]);
                }
              }}
            >
              <AntDesign name="close" size={24} color="black" />            </TouchableOpacity>
          </Box>
        ))}
      </ScrollView> */}

      {hintMessage && (
        <Text my="s" color="grey500" fontSize={14}>
          {hintMessage}
        </Text>
      )}
      {errorMessage && (
        <Text mb="s" color="error" fontSize={14}>
          {errorMessage.toString()}
        </Text>
      )}
    </Box>
  );
};

export default FileUpload;
