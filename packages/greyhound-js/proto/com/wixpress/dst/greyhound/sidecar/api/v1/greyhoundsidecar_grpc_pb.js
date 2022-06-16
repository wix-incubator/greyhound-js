// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb = require('../../../../../../../../proto/com/wixpress/dst/greyhound/sidecar/api/v1/greyhoundsidecar_pb.js');
var google_protobuf_wrappers_pb = require('google-protobuf/google/protobuf/wrappers_pb.js');
var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_com_wixpress_dst_greyhound_sidecar_api_v1_CreateTopicsRequest(arg) {
  if (!(arg instanceof proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.CreateTopicsRequest)) {
    throw new Error('Expected argument of type com.wixpress.dst.greyhound.sidecar.api.v1.CreateTopicsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_CreateTopicsRequest(buffer_arg) {
  return proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.CreateTopicsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_wixpress_dst_greyhound_sidecar_api_v1_CreateTopicsResponse(arg) {
  if (!(arg instanceof proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.CreateTopicsResponse)) {
    throw new Error('Expected argument of type com.wixpress.dst.greyhound.sidecar.api.v1.CreateTopicsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_CreateTopicsResponse(buffer_arg) {
  return proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.CreateTopicsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_wixpress_dst_greyhound_sidecar_api_v1_ProduceRequest(arg) {
  if (!(arg instanceof proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.ProduceRequest)) {
    throw new Error('Expected argument of type com.wixpress.dst.greyhound.sidecar.api.v1.ProduceRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_ProduceRequest(buffer_arg) {
  return proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.ProduceRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_wixpress_dst_greyhound_sidecar_api_v1_ProduceResponse(arg) {
  if (!(arg instanceof proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.ProduceResponse)) {
    throw new Error('Expected argument of type com.wixpress.dst.greyhound.sidecar.api.v1.ProduceResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_ProduceResponse(buffer_arg) {
  return proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.ProduceResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_wixpress_dst_greyhound_sidecar_api_v1_RegisterRequest(arg) {
  if (!(arg instanceof proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.RegisterRequest)) {
    throw new Error('Expected argument of type com.wixpress.dst.greyhound.sidecar.api.v1.RegisterRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_RegisterRequest(buffer_arg) {
  return proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.RegisterRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_wixpress_dst_greyhound_sidecar_api_v1_RegisterResponse(arg) {
  if (!(arg instanceof proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.RegisterResponse)) {
    throw new Error('Expected argument of type com.wixpress.dst.greyhound.sidecar.api.v1.RegisterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_RegisterResponse(buffer_arg) {
  return proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.RegisterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_wixpress_dst_greyhound_sidecar_api_v1_StartConsumingRequest(arg) {
  if (!(arg instanceof proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.StartConsumingRequest)) {
    throw new Error('Expected argument of type com.wixpress.dst.greyhound.sidecar.api.v1.StartConsumingRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_StartConsumingRequest(buffer_arg) {
  return proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.StartConsumingRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_com_wixpress_dst_greyhound_sidecar_api_v1_StartConsumingResponse(arg) {
  if (!(arg instanceof proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.StartConsumingResponse)) {
    throw new Error('Expected argument of type com.wixpress.dst.greyhound.sidecar.api.v1.StartConsumingResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_StartConsumingResponse(buffer_arg) {
  return proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.StartConsumingResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var GreyhoundSidecarService = exports.GreyhoundSidecarService = {
  produce: {
    path: '/com.wixpress.dst.greyhound.sidecar.api.v1.GreyhoundSidecar/Produce',
    requestStream: false,
    responseStream: false,
    requestType: proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.ProduceRequest,
    responseType: proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.ProduceResponse,
    requestSerialize: serialize_com_wixpress_dst_greyhound_sidecar_api_v1_ProduceRequest,
    requestDeserialize: deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_ProduceRequest,
    responseSerialize: serialize_com_wixpress_dst_greyhound_sidecar_api_v1_ProduceResponse,
    responseDeserialize: deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_ProduceResponse,
  },
  createTopics: {
    path: '/com.wixpress.dst.greyhound.sidecar.api.v1.GreyhoundSidecar/CreateTopics',
    requestStream: false,
    responseStream: false,
    requestType: proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.CreateTopicsRequest,
    responseType: proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.CreateTopicsResponse,
    requestSerialize: serialize_com_wixpress_dst_greyhound_sidecar_api_v1_CreateTopicsRequest,
    requestDeserialize: deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_CreateTopicsRequest,
    responseSerialize: serialize_com_wixpress_dst_greyhound_sidecar_api_v1_CreateTopicsResponse,
    responseDeserialize: deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_CreateTopicsResponse,
  },
  register: {
    path: '/com.wixpress.dst.greyhound.sidecar.api.v1.GreyhoundSidecar/Register',
    requestStream: false,
    responseStream: false,
    requestType: proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.RegisterRequest,
    responseType: proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.RegisterResponse,
    requestSerialize: serialize_com_wixpress_dst_greyhound_sidecar_api_v1_RegisterRequest,
    requestDeserialize: deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_RegisterRequest,
    responseSerialize: serialize_com_wixpress_dst_greyhound_sidecar_api_v1_RegisterResponse,
    responseDeserialize: deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_RegisterResponse,
  },
  startConsuming: {
    path: '/com.wixpress.dst.greyhound.sidecar.api.v1.GreyhoundSidecar/StartConsuming',
    requestStream: false,
    responseStream: false,
    requestType: proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.StartConsumingRequest,
    responseType: proto_com_wixpress_dst_greyhound_sidecar_api_v1_greyhoundsidecar_pb.StartConsumingResponse,
    requestSerialize: serialize_com_wixpress_dst_greyhound_sidecar_api_v1_StartConsumingRequest,
    requestDeserialize: deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_StartConsumingRequest,
    responseSerialize: serialize_com_wixpress_dst_greyhound_sidecar_api_v1_StartConsumingResponse,
    responseDeserialize: deserialize_com_wixpress_dst_greyhound_sidecar_api_v1_StartConsumingResponse,
  },
};

exports.GreyhoundSidecarClient = grpc.makeGenericClientConstructor(GreyhoundSidecarService);
