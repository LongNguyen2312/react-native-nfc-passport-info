#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ReadNfcPassport, NSObject)

RCT_EXTERN_METHOD(readPassport: (NSString *)mrzKey
                  customMessages: (NSDictionary *)customMessages
                  resolver: (RCTPromiseResolveBlock)resolve
                  rejecter: (RCTPromiseRejectBlock)reject)

+ (BOOL)requiresMainQueueSetup
{
  return NO;
}

@end
