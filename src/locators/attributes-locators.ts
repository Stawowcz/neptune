export const AttributeRowNames = {
  Config: /config/,
  Debug: /debug/,
  Eval: /eval/,
  Random: /random/,
  Sys: "sys",
  System: /system/,
  DistributedType: /distributed_type/,
  DType: /dtype/,
  GitCommit: /git_commit/,
  Seed: /seed/,
  Data: /data/,
  Model: /model/,
  Tokenizer: /tokenizer/,
  Training: /training/,
  Parameters: /parameters\.json/,
  BatchSize: /batch_size/,
  Packing: /packing/,
  SequenceLength: /sequence_length/,
  Metric000: /metric_00000/,
} as const;

export type AttributeRowKey = keyof typeof AttributeRowNames;
