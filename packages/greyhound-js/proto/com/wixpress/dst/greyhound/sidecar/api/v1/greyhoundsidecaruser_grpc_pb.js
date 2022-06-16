// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecaruser_pb = require('../../../../../../../../proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecaruser_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');

function serialize_com_wixpress_dst_greyhound_sidecar_api_v1_HandleMessagesRequest(arg) {
  if (!(arg instanceof proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecaruser_pb.HandleMessagesRequest)) {
    throw new Error('Expected argument of type com.wixpress.dst.greyhound.sidecar.api.v1.HandleMessagesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_HandleMessagesRequest(buffer_arg) {
  return proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecaruser_pb.HandleMessagesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_wixpress_dst_greyhound_sidecar_api_v1_HandleMessagesResponse(arg) {
  if (!(arg instanceof proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecaruser_pb.HandleMessagesResponse)) {
    throw new Error('Expected argument of type com.wixpress.dst.greyhound.sidecar.api.v1.HandleMessagesResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_HandleMessagesResponse(buffer_arg) {
  return proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecaruser_pb.HandleMessagesResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreyhoundSidecarUserService = exports.GreyhoundSidecarUserService = {
  handleMessages: {
    path: '/com.wixpress.dst.greyhound.sidecar.api.v1.GreyhoundSidecarUser/HandleMessages',
    requestStream: false,
    responseStream: false,
    requestType: proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecaruser_pb.HandleMessagesRequest,
    responseType: proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecaruser_pb.HandleMessagesResponse,
    requestSerialize: serialize_com_wixpress_dst_greyhound_sidecar_api_v1_HandleMessagesRequest,
    requestDeserialize: deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_HandleMessagesRequest,
    responseSerialize: serialize_com_wixpress_dst_greyhound_sidecar_api_v1_HandleMessagesResponse,
    responseDeserialize: deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_HandleMessagesResponse,
  },
};

exports.GreyhoundSidecarUserClient = grpc.makeGenericClientConstructor(GreyhoundSidecarUserService);
